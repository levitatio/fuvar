import TextCardWithIcon from '../card/TextCardWithIcon';

function CardList (props) {
  return (
    <div className={props.className}>
      {props.data && props.data.map((item, index) =>
        <TextCardWithIcon
          key={index}
          className={props.globalClassName}
          iconClassName={props.globalIconClassName}
          href={item.iconHref}
          title={item.title}
          description={item.description}
        />
      )}
    </div>
  );
}

export default CardList;
