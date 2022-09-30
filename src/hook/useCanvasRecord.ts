import { useState, useCallback } from 'react';
import { TldrawApp } from '@tldraw/tldraw';

import { pushNotification } from '@/util/notification';

type CanvasRecordTimelineProps = [number, number][];

const useCanvasRecord = () => {
  const [startTimeline, setStartTimeline] = useState<number[]>([]);
  const [canvasRecordTimeline, setCanvasRecordTimeline] = useState<CanvasRecordTimelineProps>([]);

  const startCanvasRecord = useCallback(
    (tlDrawApp: TldrawApp, userId: string, startTime: string) => {
      const isAlreadyExist: boolean = startTimeline.reduce((acc, cur) => {
        if (!acc && cur === parseInt(startTime, 10)) acc = true;
        return acc;
      }, false);

      if (!isAlreadyExist) {
        tlDrawApp.createPage(startTime, userId);
        setStartTimeline([...startTimeline, parseInt(startTime, 10)]);
      } else pushNotification('해당 시간대에 이미 필기가 존재합니다', 'error');
      console.log(canvasRecordTimeline, startTimeline);
    },
    [canvasRecordTimeline, startTimeline],
  );

  const endCanvasRecord = useCallback(
    (tlDrawApp: TldrawApp, endTime: string) => {
      const isAlreadyExist: boolean = canvasRecordTimeline.reduce((acc, cur) => {
        if (!acc && (cur[0] === parseInt(endTime, 10) || cur[1] === parseInt(endTime, 10)))
          acc = !acc;
        return acc;
      }, false);

      if (!isAlreadyExist)
        setCanvasRecordTimeline([
          ...canvasRecordTimeline,
          [startTimeline[startTimeline.length - 1], parseInt(endTime, 10)],
        ]);
      else pushNotification('해당 시간대에 이미 필기가 존재합니다', 'error');
      tlDrawApp.changePage('-1');
    },
    [canvasRecordTimeline, startTimeline],
  );

  //getpageState get page state by Id
  const getCanvasRecord = useCallback((tlDrawApp: TldrawApp, userId: string, startTime: string) => {
    tlDrawApp.changePage(startTime);
  }, []);

  const deleteCanvasRecord = useCallback(
    (tlDrawApp: TldrawApp, userId: string, startTime: string) => {
      tlDrawApp.deletePage(startTime);
    },
    [],
  );

  return {
    canvasRecordTimeline,
    startCanvasRecord,
    endCanvasRecord,
    getCanvasRecord,
    deleteCanvasRecord,
  };
};

export default useCanvasRecord;
