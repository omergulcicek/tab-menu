# Tab Menu

Başlıklara tıklandığında onunla ilgili içeriği gösterir.

Sade bir HTML yapısı vardır. Kaçıncı başlığa tıklandığı kod tarafından yakalanır ve o index'in içeriği açılır.

4. başlığa tıklanırsa, 4. içerik gösterilir vb.

```html
<div class="tab-menu">
  <nav>
    <a class="is-active">Başlık</a>
    <a>Başlık</a>
  </nav>

  <div class="contents">
    <div>İçerik</div>
    <div class="d-none">İçerik</div>
  </div>
</div>
```

---

**NOT**: Proje CSS içermez. Gizlenecek içeriklere `d-none` sınıfı eklenir.
