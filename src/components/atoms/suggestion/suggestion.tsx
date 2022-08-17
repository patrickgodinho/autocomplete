import './suggestion.styles.css';

type SuggestionProps = {
  children: JSX.Element;
};

function Suggestion({ children }: SuggestionProps) {
  return <div className="suggestion-container">{children}</div>;
}

export default Suggestion;
