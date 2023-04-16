import AppUserSignInModal from '../userSignInModal';

const AppProtectedRouteOne = (props) => {

    return (
        <div>
            <AppUserSignInModal />
            <div>
                {props.children}
            </div>
        </div>
    )
};

export default AppProtectedRouteOne;
