import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Account } from './pages/account/account';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';
import { Collection } from './pages/collection/collection';
import { Collections } from './pages/collections/collections';
import { Contact } from './pages/contact/contact';
import { ComboPack } from './pages/combo-pack/combo-pack';
import { TailoringMaterial } from './pages/tailoring-material/tailoring-material';
import { AariMaterial } from './pages/aari-material/aari-material';
import { KundanStoneFittingStone } from './pages/kundan-stone-fitting-stone/kundan-stone-fitting-stone';
import { JewelleryMakingMaterial } from './pages/jewellery-making-material/jewellery-making-material';
import { ArtificialFlowerMakingMaterial } from './pages/artificial-flower-making-material/artificial-flower-making-material';
import { BroochMaterial } from './pages/brooch-material/brooch-material';
import { PackingMaterials } from './pages/packing-materials/packing-materials';
import { OrderSuccess } from './pages/order-success/order-success';
import { Payment } from './pages/payment/payment';
import { Privacy } from './pages/privacy/privacy';
import { Product } from './pages/product/product';
import { Refund } from './pages/refund/refund';
import { Shipping } from './pages/shipping/shipping';
import { Terms } from './pages/terms/terms';
import { Wishlist } from './pages/wishlist/wishlist';






export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'account',
    component: Account,
  },
  {
    path: 'cart',
    component: Cart,
  },
  {
    path: 'checkout',
    component: Checkout,
  },
  {
    path: 'collection',
    component: Collection,
  },
  {
    path: 'collections',
    component: Collections,
  },
  {
    path: 'contact',
    component: Contact,
  },
  {
    path: 'combo-pack',
    component: ComboPack,
  },
  {
    path: 'tailoring-material',
    component: TailoringMaterial,
  },
  {
    path: 'aari-material',
    component: AariMaterial,
  },
  {
    path: 'kundan-stone-fitting-stone',
    component: KundanStoneFittingStone,
  },
  {
    path: 'jewellery-making-material',
    component: JewelleryMakingMaterial,
  },
  {
    path: 'artificial-flower-making-material',
    component: ArtificialFlowerMakingMaterial,
  },
  {
    path: 'brooch-material',
    component: BroochMaterial,
  },
  {
    path: 'packing-materials',
    component: PackingMaterials,
  },
  {
    path: 'order-success',
    component: OrderSuccess,
  },
  {
    path: 'payment',
    component: Payment,
  },
  {
    path: 'privacy',
    component: Privacy,
  },
  {
    path: 'product',
    component: Product,
  },
  {
    path: 'refund',
    component: Refund,
  },
  {
    path: 'shipping',
    component: Shipping,
  },
  {
    path: 'terms',
    component: Terms,
  },
  {
    path: 'wishlist',
    component: Wishlist,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
