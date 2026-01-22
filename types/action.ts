import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export type Action ={
  id:string;
  icon:React.ComponentProps<typeof MaterialIcons>['name'];
  title:string;
}