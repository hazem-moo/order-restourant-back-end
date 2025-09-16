import type { Schema, Struct } from '@strapi/strapi';

export interface CartCart extends Struct.ComponentSchema {
  collectionName: 'components_cart_carts';
  info: {
    displayName: 'Cart';
  };
  attributes: {
    description: Schema.Attribute.String;
    name: Schema.Attribute.String;
    orderId: Schema.Attribute.Integer;
    orderImg: Schema.Attribute.String;
    price: Schema.Attribute.Decimal;
    quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cart.cart': CartCart;
    }
  }
}
