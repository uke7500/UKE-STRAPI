import type { Schema, Struct } from '@strapi/strapi';

export interface ShippingInfoShipping extends Struct.ComponentSchema {
  collectionName: 'components_shipping_info_shippings';
  info: {
    displayName: 'Shipping';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    city: Schema.Attribute.String & Schema.Attribute.Required;
    country: Schema.Attribute.String & Schema.Attribute.Required;
    full_name: Schema.Attribute.String & Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    postal_code: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shipping-info.shipping': ShippingInfoShipping;
    }
  }
}
