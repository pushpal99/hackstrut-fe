import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import loginReducer, { addTodo, deleteTodo } from './slice';
import { selectTask } from './selector';
import Login from './Login';
import loginSagas from './saga';
// import loginReducer from './slice';

// const dispatchToProps = {
//    addTodo,
//    deleteTodo,
// }

// const stateToProps = createStructuredSelector({
//     task: selectTask(),
// })

export { loginSagas, loginReducer };
export default Login
// export default connect(stateToProps, dispatchToProps)(Login);