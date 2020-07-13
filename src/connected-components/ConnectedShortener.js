import { connect } from 'react-redux';
import ShortenWidget from '../components/ShortenWidget';
import { TEXT_SUBMIT, TEXT_CHANGE } from '../action-types';
import { textSelector } from '../selectors';

const mapStateToProps = state => {
  const textValue = textSelector(state);
  return {
    textValue
  };
}

const mapDispatchToProps = dispatch => {
  const onSubmit = () => dispatch({ type: TEXT_SUBMIT });
  const onTextChange = value => dispatch({ type: TEXT_CHANGE, value });
  return {
    onSubmit,
    onTextChange
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShortenWidget);
