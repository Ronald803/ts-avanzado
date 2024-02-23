enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer"
}
                                              // Los ENUM funcionan como listas en las qeu podemos agregar llaves y valores. Esto lo que nos
type UserNew = {                              // permite es tener un set de opciones predefinidas
  userName: string,                           // En este caso el enum se llama ROLES, y para el objecto en su propiedad role, solo puede
  role: ROLES                                 // utilizarse una de las opciones del enum ROLES, pero se debe hacer llamando al enum
}

const nicoUser: UserNew = {
  userName: "pablito",
  role: ROLES.ADMIN
}
