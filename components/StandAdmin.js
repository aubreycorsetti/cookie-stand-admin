import CookieStandForm from "./CreateForm";
import CookieStandTable from "./ReportTable";
import useResource from "../hooks/useResource";
import Footer from "./Footer";
import Header from "./Header";

export default function CookieStandAdmin() {

  const { resources, deleteResource } = useResource();

  return (
      <>
          <Header/>
          <CookieStandForm />
          <CookieStandTable stands={resources || []} deleteStand={deleteResource} />
          <Footer stands={resources || []}/>
      </>
  );
}