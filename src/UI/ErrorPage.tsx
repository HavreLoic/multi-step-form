import { useRouteError } from "react-router-dom";
import { ErrorType } from "../app-types";

export const ErrorPage = () => {
    const error: ErrorType | undefined = useRouteError() as ErrorType | undefined;

    return (
        <div id="error-page" className="h-[100vh] flex justify-center items-center">
            <div>
                <h1 className="font-black text-center mb-5">Oops!</h1>
                <p className="font-normal mb-5">Sorry, an unexpected error has occurred.</p>
                <p className="text-center">
                    <i>{error?.statusText || error?.message}</i>
                </p>
            </div>
        </div>
    )
}