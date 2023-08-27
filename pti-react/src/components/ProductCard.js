export default function ProductCard(props) {
    return (
      <>
      {props.products.map(product => 
          <section className="bg-white w-52 h-64 rounded-xl flex flex-col justify-between items-center m-5">
            <img className="w-24 pt-5" src={product.img} alt="" />
            <h6 className="text-black text-lg text-center	">{product.name}</h6>
            <div className="flex pb-4">
              <p className="text-black flex-initial w-40 ">$ {product.price}</p>
              <button className="bg-sky-400 px-2">+</button>
            </div>
          </section>
        )}
      </>
    )
  }
  