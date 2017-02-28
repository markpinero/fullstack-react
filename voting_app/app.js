

class ProductList extends React.Component {
  render() {
    const product = Data[1];
    return (
      <div className='ui items'>
        <Product id={product.id} title={product.title} description={product.description} url={product.url} votes={product.votes} submitter_avatar_url={product.submitter_avatar_url} product_image_url={product.product_image_url} />
      </div>
      )
  }
}

function Product(props) {
  return (
    <div className='item'>
      <div className='image'>
        <img src={props.product_image_url} />
      </div>
      <div className='middle aligned content'>
        <div className='description'>
          <a>{props.title}</a>
          <p>{props.description}</p>
        </div>
        <div className='extra'>
          <span>Submitted by:</span>
          <img className='ui avatar image' src={props.submitter_avatar_url} />
        </div>
      </div>
    </div>
    )
}

ReactDOM.render(
  <ProductList />,
  document.getElementById('content')
);