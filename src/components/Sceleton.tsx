import ContentLoader from "react-content-loader";

const Sceleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={320}
    height={320}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="125" cy="125" r="125" />
    <rect x="249" y="360" rx="0" ry="0" width="4" height="1" />
    <rect x="0" y="266" rx="10" ry="10" width="280" height="27" />
    <rect x="1" y="312" rx="10" ry="10" width="280" height="88" />
    <rect x="0" y="420" rx="10" ry="10" width="91" height="27" />
    <rect x="120" y="418" rx="10" ry="10" width="152" height="46" />
  </ContentLoader>
);

export default Sceleton;
