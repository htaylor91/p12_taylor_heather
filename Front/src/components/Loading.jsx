export default function Loading({children = 'Chargement en cours...'}) {
    return (
        <div className="loading">{children}</div>
    );
}