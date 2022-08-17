import './highlighted-text.styles.css';

type TextProps = {
  children: string;
  highlight: string;
};
function HighlightedText({ children, highlight }: TextProps) {
  const highlightSize = highlight.length;
  const highlightIndex = children.toUpperCase().indexOf(highlight.toUpperCase());

  const checkHighlightNeeded = (index: number, char: string) =>
    index >= highlightIndex &&
    index <= highlightIndex + highlightSize &&
    highlight.toUpperCase().indexOf(char.toUpperCase()) !== -1;

  const Highlighted = () => (
    <div>
      {children.split('').map((char, index) => (
        <span className={checkHighlightNeeded(index, char) ? 'highlighted' : 'normal'} key={char + index}>
          {char}
        </span>
      ))}
    </div>
  );
  return <Highlighted />;
}

export default HighlightedText
