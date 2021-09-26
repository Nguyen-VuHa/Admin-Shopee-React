import MainPageAdmin from 'components/MainPage';
import PageNotFound from 'components/PageNotFound';
import SiderBar from 'components/SiderBar';
import PageLogin from 'features/Auth/Login';
import { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

function App() {
    return (
		<Suspense fallback={<div>loading . . .</div>} >
			<BrowserRouter>
				<Switch>
					<Redirect exact from="/" to="/dashboard"/>
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
					<Route path="/login">
						<PageLogin />
					</Route>
					<Route path="*">
                        <PageNotFound />
                    </Route>
				</Switch>
			</BrowserRouter>
		</Suspense>
    );
}

export default App;
