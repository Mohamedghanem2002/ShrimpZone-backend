import type { Schema, Struct } from '@strapi/strapi';

export interface OrderitemOrderitem extends Struct.ComponentSchema {
  collectionName: 'components_orderitem_orderitems';
  info: {
    description: '';
    displayName: 'orderitem';
  };
  attributes: {
    amount: Schema.Attribute.Decimal;
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'orderitem.orderitem': OrderitemOrderitem;
    }
  }
}
