# 📸 写真差し替えガイド｜瀬戸整骨院ウェブサイト

## 推奨写真サイズ

| 用途 | 推奨サイズ | ファイル名例 |
|------|-----------|-------------|
| ヒーロー画像（トップ） | 1200×1500px | `hero.jpg` |
| 院長プロフィール写真 | 960×1280px（縦長） | `director.jpg` |
| 施術シーン① | 1280×960px | `treatment-1.jpg` |
| 施術シーン② | 1280×960px | `treatment-2.jpg` |
| 院内外観 | 1280×960px | `clinic-exterior.jpg` |
| 院内内観 | 1280×960px | `clinic-interior.jpg` |

## 写真の置き方

1. 写真ファイルをサイトのフォルダに入れる
2. 各HTMLファイルの該当箇所を検索して差し替える

### index.html（ヒーロー画像）
```html
<!-- 変更前 -->
<img src="https://lh3.googleusercontent.com/..." alt="瀬戸整骨院">

<!-- 変更後 -->
<img src="hero.jpg" alt="瀬戸整骨院">
```

### first-visit.html（院長プロフィール）
```html
<!-- 変更前 -->
<img src="https://lh3.googleusercontent.com/..." alt="院長 瀬戸東希">

<!-- 変更後 -->
<img src="director.jpg" alt="院長 瀬戸東希">
```

### reasons.html（特徴画像3枚）
各`<div class="feature-visual">`内の`<img>`タグを差し替えてください。

### symptoms.html（症状別画像4枚）
各`<div class="symptom-image">`内の`<img>`タグを差し替えてください。

## ポイント
- **JPEG形式推奨**（ファイルサイズと品質のバランスが良い）
- **圧縮ツール**：[TinyJPEG](https://tinyjpg.com/) でファイルサイズを小さくするとページ速度が上がります
- **alt属性**は必ずSEOを意識した説明文に変えてください

## GitHub Pagesへのアップロード
写真ファイルをHTMLファイルと同じフォルダにドラッグ＆ドロップするだけでOKです。
