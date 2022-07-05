

export default function NameSearch(props){
    return(
        <>
        <p>search</p>
        <input style={{height:"36px",margin:"50px 20px"}} aria-label='ابحث' type="text" onChange={(e)=>props.setSearchValue(e.target.value)}/>
        </>
    );
}