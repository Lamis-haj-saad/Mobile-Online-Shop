export default function Promo({dclass, iclass, children}){
    return (
        <div className="col-md-3 col-sm-6">
            <div className={dclass}>
              <i className={iclass}></i>
              <p>{children}</p>
            </div>
          </div>
    )
}