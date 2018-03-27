import apiMiddleware from '../store/apiMiddleware'
import * as c from '../actions/constants'

describe('apiMiddleware', () => {
  const mockDispatch = () => {};
  const mockGetState = () => {};
  const nextHandler = apiMiddleware({dispatch: mockDispatch, getState: mockGetState});

  describe('handle next', () => {

    it('must return a function to handle action', () => {
      const actionHandler = nextHandler();
      expect(actionHandler.length).toBe(1)
      expect(typeof actionHandler === 'function')
    });

    describe('handle action', () => {
      it('must run the action', done => {
        const actionHandler = nextHandler();
        actionHandler((dispatch, getState) => {
          expect(dispatch).toEqual(mockDispatch)
          expect(getState).toEqual(mockGetState)
          done();
        })
      });

      it('must pass action to next if not a function', done => {
        const mockAction = {};
        const actionHandler = nextHandler(action => {
          expect(action).toEqual(mockAction)
          done();
        });
        actionHandler(mockAction);
      });

      it('must return value as expected if a function', () => {
        const mockFn = () => {
          return 'mock-fn'
        }
        const actionHandler = nextHandler();
        expect(actionHandler(mockFn), mockFn)
      });
    });
  });

});
