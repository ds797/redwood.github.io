import BarElement from "./BarElement";



import "./directory.css"


function DirectBar({ elems, setRoute }){
    var list = []

    for (const elem of elems){
      list.push(<BarElement route={elem.route} manip={setRoute} key={elem.rel + elem.text} rel={elem.rel} text={elem.text} sideHrefs={elem.sideHrefs} />)
    }

    return (
        <div className="DirectBar">
            <BarElement rel={"#"} text="Honors Precalculus Review"></BarElement>
            {list}
        </div>
    )
}

export default DirectBar;