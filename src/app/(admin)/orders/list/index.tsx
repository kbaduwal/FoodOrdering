import { FlatList, Text } from "react-native";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrdeListItem";


export default function OrderScreen() {
    return(
      <FlatList
        data = {orders}
        renderItem={({item})=> <OrderListItem order={item} />}  
        contentContainerStyle={{gap:10, padding:10}}    
      />  
    );

};