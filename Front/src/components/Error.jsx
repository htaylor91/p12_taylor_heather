export default function Error({children = 'Une erreur s\'est produite'}) {
    return (
        <div className="error">{children}</div>
    );
}