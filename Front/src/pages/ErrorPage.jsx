/**
 * @component
 * Page to render when the user tries to access a page that doesn't exist
 */
function ErrorPage(){
    return (
        <div style={{display: 'grid', placeContent: 'center', height: '100vh'}}>
            <h1>404</h1>
            <p>Page not found</p>
        </div>
    )
}

export default ErrorPage