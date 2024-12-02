import { useCallback, useEffect, useRef, useState } from 'react';
import { Image, Label, TileWrapper } from './styles';

interface TileProps {
  content?: string;
}

const Tile = (props: TileProps) => {
  const { content } = props;
  const labelRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const getImage = useCallback(() => {
    if (!content) return '';
    const formatted = content
      .replaceAll(' ', '_')
      .replaceAll('.', '')
      .toLocaleLowerCase();
    return require(`../../Static/gadgets/${formatted}.png`);
  }, [content]);

  useEffect(() => {
    if (labelRef.current) {
      setIsOverflowing(
        labelRef.current.offsetWidth < labelRef.current.scrollWidth
      );
    }
  }, [content]);

  return (
    <TileWrapper>
      <Image src={getImage()} alt={content} />
      <Label ref={labelRef} className={isOverflowing ? 'scrolling' : ''}>
        {content}
      </Label>
    </TileWrapper>
  );
};

export default Tile;
