export default function Pagination({page, setPage, isNext}){
    return <>
        <button onClick={()=>setPage(page - 1)} disabled={page <= 1}>Prev</button>
        {page}
        <button onClick={()=>setPage(page + 1)} disabled={!isNext}>Next</button>
    </>
}