import dva from 'dva';
import 'antd/dist/antd.less';
import './index.css';

// 1. Initialize
// const app = dva();
const app = dva({
  initialState: {
    products: [
      { name: 'dva', id: 1 },
      { name: 'antd', id: 2 },
    ],
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/products'));
app.model(require('./models/note'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
