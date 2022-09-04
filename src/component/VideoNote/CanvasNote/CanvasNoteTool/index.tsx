import { TldrawApp, TDShapeType } from '@tldraw/tldraw';
import { RiBallPenLine, RiEraserLine, RiArrowRightUpLine } from 'react-icons/ri';
import { GrCursor } from 'react-icons/gr';
import { TbRectangle, TbCircle } from 'react-icons/tb';
import { BsFonts } from 'react-icons/bs';
import { useCallback, useState } from 'react';

import { CanvasNoteToolContainer, CanvasNoteTools } from './style';
import { clickedSVG } from './constant';
import { Colors } from '@/util/Constant';

interface Props {
  tlDrawApp: TldrawApp;
}

const CanvasNoteTool: React.FC<Props> = ({ tlDrawApp }: Props) => {
  const [clickedSvg, setClickedSvg] = useState<number>(clickedSVG.CURSOR);

  const cursorClickhandler = useCallback(() => {
    tlDrawApp.selectTool('select');
    setClickedSvg(clickedSVG.CURSOR);
  }, []);

  console.log(tlDrawApp.style);
  return (
    <CanvasNoteToolContainer>
      <CanvasNoteTools>
        <GrCursor
          onClick={cursorClickhandler}
          style={{ fill: `${clickedSvg === clickedSVG.CURSOR ? Colors.Blue1 : Colors.Black3}` }}
          size="20"
        />
        <RiBallPenLine
          onClick={() => tlDrawApp.selectTool(TDShapeType.Draw)}
          color="#333333"
          size="24"
        />
        <RiEraserLine onClick={() => tlDrawApp.selectTool('erase')} color="#333333" size="24" />
        <RiArrowRightUpLine
          onClick={() => tlDrawApp.selectTool(TDShapeType.Arrow)}
          color="#333333"
          size="24"
        />
        <TbRectangle
          onClick={() => tlDrawApp.selectTool(TDShapeType.Rectangle)}
          color="#333333"
          size="24"
        />
        <TbCircle
          onClick={() => tlDrawApp.selectTool(TDShapeType.Ellipse)}
          color="#333333"
          size="24"
        />
        <BsFonts onClick={() => tlDrawApp.selectTool(TDShapeType.Text)} color="#333333" size="24" />
      </CanvasNoteTools>
    </CanvasNoteToolContainer>
  );
};

export default CanvasNoteTool;
