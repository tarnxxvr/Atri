import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useNavbar_flexCb() {
	const onClick = useCallback(callbackFactory("Navbar_flex", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}