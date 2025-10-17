import Price from "../Price/Price";
const MyServices = () => {
  return (
    <div>
      <h2>Мої послуги та прайс</h2>

      <Price />

      <ul>
        <li>Косметологія</li>
        <li>Ботулінотерапія</li>
        <li>Масаж обличча та тіла</li>
        <li>Плазмотерапія</li>
        <li>Шугарінг</li>
        <li>Обгортання</li>
        <li>Тайпування</li>
      </ul>
    </div>
  );
};

export default MyServices;
