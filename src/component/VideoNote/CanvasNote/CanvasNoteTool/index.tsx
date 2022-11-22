import { TldrawApp, TDShapeType, TDToolType } from '@tldraw/tldraw';
import { RiBallPenLine, RiEraserLine, RiArrowRightUpLine } from 'react-icons/ri';
import { TbRectangle, TbCircle } from 'react-icons/tb';
import { BsFonts, BsTrash } from 'react-icons/bs';
import { BiPointer } from 'react-icons/bi';
import { PropsWithChildren, useCallback, useState } from 'react';

// import { Icon } from '@/component/Common/Icon';
import { CanvasNoteToolContainer, CanvasNoteTools } from './style';
import { SVG_ID } from './constant';
import { Colors } from '@/util/Constant';

interface Props extends PropsWithChildren {
  tlDrawApp: TldrawApp;
  isPlusFeatureIn: boolean;
}

const toolGroup: TDToolType[] = [
  'select',
  TDShapeType.Draw,
  'erase',
  TDShapeType.Arrow,
  TDShapeType.Rectangle,
  TDShapeType.Ellipse,
  TDShapeType.Text,
];

const CanvasNoteTool: React.FC<Props> = ({ tlDrawApp, isPlusFeatureIn, children }: Props) => {
  const [clickedSvg, setClickedSvg] = useState<number>(SVG_ID.POINTER);
  const [nonActiveColor, activeColor] = isPlusFeatureIn
    ? [Colors.White, Colors.Blue3]
    : [Colors.Black3, Colors.Blue3];

  const iconClickHandler = useCallback(
    (idx: number) => {
      idx !== SVG_ID.TRASH && tlDrawApp.selectTool(toolGroup[idx]);
      setClickedSvg(idx);
    },
    [tlDrawApp],
  );

  const clearDrawing = () => {
    if (!tlDrawApp) return;
    const tool = tlDrawApp.useStore.getState().appState.activeTool;
    tlDrawApp.deleteAll();
    tlDrawApp.selectTool(tool);
  };

  const colorHandler = (svgId: number): string => {
    return clickedSvg === svgId ? activeColor : nonActiveColor;
  };

  return (
    <CanvasNoteToolContainer isTransparent={isPlusFeatureIn}>
      <CanvasNoteTools>
        <BiPointer
          onClick={() => iconClickHandler(SVG_ID.POINTER)}
          color={colorHandler(SVG_ID.POINTER)}
          size="22"
        />
        <RiBallPenLine
          onClick={() => iconClickHandler(SVG_ID.PEN)}
          color={colorHandler(SVG_ID.PEN)}
          size="22"
        />
        <RiEraserLine
          onClick={() => iconClickHandler(SVG_ID.ERASE)}
          color={colorHandler(SVG_ID.ERASE)}
          size="22"
        />
        <RiArrowRightUpLine
          onClick={() => iconClickHandler(SVG_ID.ARROW)}
          color={colorHandler(SVG_ID.ARROW)}
          size="22"
        />
        <TbRectangle
          onClick={() => iconClickHandler(SVG_ID.RECTANGLE)}
          color={colorHandler(SVG_ID.RECTANGLE)}
          size="22"
        />
        <TbCircle
          onClick={() => iconClickHandler(SVG_ID.CIRCLE)}
          color={colorHandler(SVG_ID.CIRCLE)}
          size="22"
        />
        <BsFonts
          onClick={() => iconClickHandler(SVG_ID.TEXT)}
          color={colorHandler(SVG_ID.TEXT)}
          size="22"
        />
        {isPlusFeatureIn && (
          <BsTrash onClick={() => clearDrawing()} color={colorHandler(SVG_ID.TRASH)} size="22" />
        )}
        {children}
      </CanvasNoteTools>
    </CanvasNoteToolContainer>
  );
};

export default CanvasNoteTool;
