import { TDDocument } from '@tldraw/tldraw';

export const canvasRecordInitialState: TDDocument = {
  id: 'doc',
  name: 'New Document',
  version: 15.5,
  pages: {
    '-1': {
      id: '-1',
      name: 'username',
      childIndex: 2,
      shapes: {},
      bindings: {},
    },
    page: {
      id: 'page',
      name: 'Page 1',
      childIndex: 1,
      shapes: {},
      bindings: {},
    },
  },
  pageStates: {
    '-1': {
      id: '-1',
      selectedIds: [],
      camera: {
        point: [0, 0],
        zoom: 1,
      },
    },
    page: {
      id: 'page',
      selectedIds: [],
      camera: {
        point: [0, 0],
        zoom: 1,
      },
    },
  },
  assets: {},
};
