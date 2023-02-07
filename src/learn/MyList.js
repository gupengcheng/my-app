import { List } from 'antd';

const data = [
  {
    title: 'Item 1',
    description: 'This is item 1',
    image: 'https://example.com/image1.png',
  },
  {
    title: 'Item 2',
    description: 'This is item 2',
    image: 'https://example.com/image2.png',
  }
];

function Item({ title, description, image }) {
  return (
    <List.Item
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <img src={image} alt={title} style={{ width: 64, height: 64 }} />
      <div style={{ marginLeft: 16 }}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </List.Item>
  );
}

const MyList = () => {
  return (
    <div>
    <List
      dataSource={data}
      renderItem={item => <Item {...item} />}
    />
    </div>
  );
}


export default MyList;