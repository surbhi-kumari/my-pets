export default function Sort({setSortBy, orderBy}){
    return <>
        <button onClick={setSortBy} name="bornAt">sort by age {`${orderBy == "asc" ? "ASC" : "DESC"} `}</button>
    </>
}