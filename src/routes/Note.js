import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import { routerRedux } from 'dva/router';

function Note({ dispatch, note }) {
  const {
    foo,
  } = note;
  return (
    <div >
      <Button
        type="primary" onClick={(value) => {
          dispatch({
            type: 'note/query',
            payload: {
              id: 1,
            },
          });
        }
        }
      >{foo}</Button>
      <Button type="primary">Primary</Button>
    </div>
  );
}

export default connect(({ note }) => ({ note }))(Note);
