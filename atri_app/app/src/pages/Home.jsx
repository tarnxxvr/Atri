import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { useNavbar_flexCb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Navbar_flexProps = useStore((state)=>state["Home"]["Navbar_flex"]);
const Navbar_flexIoProps = useIoStore((state)=>state["Home"]["Navbar_flex"]);
const Navbar_flexCb = useNavbar_flexCb()

  return (<>
  <Flex className="p-Home Navbar_flex bpt" {...Navbar_flexProps} {...Navbar_flexCb} {...Navbar_flexIoProps}/>
  </>);
}
