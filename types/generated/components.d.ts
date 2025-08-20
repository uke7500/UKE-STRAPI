import type { Schema, Struct } from '@strapi/strapi';

export interface OrderItemOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_order_item_order_items';
  info: {
    displayName: 'OrderItem';
  };
  attributes: {
    product: Schema.Attribute.Relation<'oneToOne', 'api::product.product'>;
    quantity: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'order-item.order-item': OrderItemOrderItem;
    }
  }
}
