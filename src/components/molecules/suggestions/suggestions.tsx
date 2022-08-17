import './suggestions.styles.css';
import { Suggestion } from '../../atoms/suggestion';
import HighlightedText from '../../atoms/highlighted-text/highlighted-text';

export type SuggestionsProps = {
  suggestions: {
    text: string;
    onSelect: () => void;
  }[];
  highlight: string;
};

function Suggestions({ suggestions, highlight }: SuggestionsProps) {
  return (
    <div>
      {suggestions?.map((suggestion) => (
        <div className="list" onClick={suggestion.onSelect} key={suggestion.text}>
          <Suggestion>
            <HighlightedText highlight={highlight}>{suggestion.text}</HighlightedText>
          </Suggestion>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
