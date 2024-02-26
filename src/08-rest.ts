import {ROLES,UserNew } from './03-enum';
const currentUser: UserNew = {
  userName: "ronaldblanco",
  role: ROLES.SELLER
}

export const checkAdminRole = () => {
  if(currentUser.role === ROLES.ADMIN){
    return true
  }
  return false
}

const rta = checkAdminRole();
console.log("Check Admin role",rta);

export const checkRole = (role1: string, role2: string) => {
  if( currentUser.role === role1){
    return true;
  }
  if( currentUser.role === role2 ){
    return true;
  }
  return false;
}

const rta2 = checkRole(ROLES.ADMIN,ROLES.SELLER);
console.log("Check role: ",rta2);

export const checkRoleV2 = (roles: string[]) => {
  if( roles.includes(currentUser.role) ){
    return true;
  }
  return false;
}

const rta3 = checkRoleV2([ROLES.ADMIN,ROLES.SELLER]);
console.log("Check role V2: ",rta3);

export const checkRoleV3 = (...roles: string[]) => {
  if( roles.includes(currentUser.role) ){
    return true;
  }
  return false;
}

const rta4 = checkRoleV3(ROLES.ADMIN,ROLES.SELLER,ROLES.CUSTOMER);
console.log("Check role V3: ",rta4);
