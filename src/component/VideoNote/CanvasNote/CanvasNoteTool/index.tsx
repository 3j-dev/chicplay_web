/* eslint-disable react/jsx-key */
import { TldrawApp, TDShapeType, TDToolType } from '@tldraw/tldraw';
import { RiBallPenLine, RiEraserLine, RiArrowRightUpLine } from 'react-icons/ri';
import { GrCursor } from 'react-icons/gr';
import { TbRectangle, TbCircle } from 'react-icons/tb';
import { BsFonts, BsTrash } from 'react-icons/bs';
import { useCallback, useState } from 'react';

import { CanvasNoteToolContainer, CanvasNoteTools } from './style';
import { clickedSVG } from './constant';
import { Colors } from '@/util/Constant';
import { BiPointer } from 'react-icons/bi';
import { config } from 'process';

interface Props {
  tlDrawApp: TldrawApp;
}

const SvgGroup: JSX.Element[] = [
  <GrCursor />,
  <RiBallPenLine />,
  <RiEraserLine />,
  <RiArrowRightUpLine />,
  <TbRectangle />,
  <TbCircle />,
];
const SvgGroupPlus: JSX.Element[] = [...SvgGroup, <BsTrash />];
const toolGroup: TDToolType[] = [
  'select',
  TDShapeType.Draw,
  TDShapeType.Arrow,
  TDShapeType.Rectangle,
  TDShapeType.Ellipse,
  TDShapeType.Text,
];

const CanvasNoteTool: React.FC<Props> = ({ tlDrawApp }: Props) => {
  const [clickedSvg, setClickedSvg] = useState<number>(clickedSVG.CURSOR);

  const iconClickHandler = useCallback(
    (idx: number) => {
      tlDrawApp.selectTool(toolGroup[idx]);
      setClickedSvg(idx);
    },
    [tlDrawApp],
  );

  const iconConfig = (idx) => {
    onClick={() => iconClickHandler(idx)},
    color={clickedSvg === idx ? Colors.Blue3 : Colors.Black3},
    size="24"
  };
  //svg color 안 바뀌는 문제 해결 필

  return (
    <CanvasNoteToolContainer>
      <CanvasNoteTools>
        <BiPointer
          {...iconConfig(0)}
        />
        <RiBallPenLine
          onClick={() => tlDrawApp.selectTool(TDShapeType.Draw)}
          color="#333"
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
