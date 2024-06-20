import { DropdownTrigger } from "@/components/Header/DropdownTrigger";
import { BellOutlined } from "@ant-design/icons";
import { Badge } from "antd";

export const Notifications = () => {
  return (
    <DropdownTrigger>
      <Badge dot={true}>
        <BellOutlined/>
      </Badge>
    </DropdownTrigger>
  )
}
