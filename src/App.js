import MainPageAdmin from 'components/MainPage';
import PageNotFound from 'components/PageNotFound';
import QuestionModal from 'components/QuestionModal';
import SiderBar from 'components/SiderBar';
import ToastMessage from 'components/ToastMessage';
import { setIsLogin } from 'features/Auth/authSlice';
import PageLogin from 'features/Auth/Login';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import 'simplebar';
import 'simplebar/dist/simplebar.css';
import './App.scss';

function App() {
	const state = useSelector((state) => state.auth);
	const accessToken = localStorage.getItem('accessToken');
	const dispactch = useDispatch();

	useEffect(() => {
		if(accessToken)
		{
			dispactch(setIsLogin());
		}
	}, [dispactch]);

    return (
		<Suspense fallback={<div>loading . . .</div>} >
			<ToastMessage autoDeleteInterval={3500}/>
			<QuestionModal />
			<BrowserRouter>
				<Switch>
					<Redirect exact from="/" to={state.isLogin ? '/dashboard' : '/login'}/>
					{
						state.isLogin ? 
						<Route path="/dashboard">
						<div className="admin-app" id="page-top">
							<div id="wrapper">
								<SiderBar />
								<MainPageAdmin />
							</div>
							<a className="scroll-to-top rounded" href="#page-top">
								<i className="fas fa-angle-up"></i>
							</a>
						</div>
						</Route>	
						:
						<Route path="/login">
							<PageLogin />
						</Route>
					}
					<Route path="*">
                        <PageNotFound />
                    </Route>
				</Switch>
			</BrowserRouter>
		</Suspense>
    );
}

export default App;
