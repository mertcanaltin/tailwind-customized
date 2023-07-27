// Örnek fonksiyonlar

// Bu fonksiyon, Tailwind CSS'in renklerini alarak özel bir renk paleti oluşturur.
function createCustomColorPalette() {
    return {
      primary: "#ff5733",
      secondary: "#2e64b8",
      accent: "#e4e42e",
    };
  }
  
  // Bu fonksiyon, verilen renk paletini kullanarak Tailwind CSS'e renkleri ekler.
  function addCustomColorsToTailwind(colorPalette) {
    return {
      theme: {
        colors: {
          ...colorPalette,
        },
      },
    };
  }
  
  // Bu fonksiyon, belirli bir renkteki metni vurgulamak için stil ekler.
  function highlightText(color) {
    return `color: ${color}; font-weight: bold;`;
  }
  
  // Bu fonksiyon, belirli bir değere göre dinamik olarak sınıf eklemeyi sağlar.
  function dynamicClassCondition(isActive) {
    return isActive ? "active-class" : "inactive-class";
  }
  
  // Kullanıcıya özelleştirilmiş stiller ve sınıf eklemeyi sağlamak için ana işlev
  function customizeTailwind() {
    // Özelleştirilmiş renk paletini oluştur
    const colorPalette = createCustomColorPalette();
  
    // Tailwind'e özelleştirilmiş renkleri ekleyin
    const customizedColors = addCustomColorsToTailwind(colorPalette);
  
    // Özel sınıfı tanımla
    const customClass = `.custom-class {
      ${highlightText(colorPalette.primary)}
      /* Diğer özel stilleri burada ekleyebilirsiniz */
    }`;
  
    // Örnek dinamik sınıf durumu
    const isActive = true;
    const dynamicClass = dynamicClassCondition(isActive);
  
    return {
      ...customizedColors,
      corePlugins: {
        // İstediğiniz çekirdek eklentilerini buraya ekleyin (örneğin, container, animation, vs.)
      },
      // Özel stilleri ekleyin
      styles: {
        ...customClass,
        /* Diğer özel stilleri burada ekleyebilirsiniz */
      },
      // Dinamik sınıf durumunu ekleyin
      dynamicClasses: {
        [dynamicClass]: `color: ${colorPalette.secondary};`,
      },
    };
  }
  
  // Kullanım örneği
  const tailwindConfig = customizeTailwind();
  module.exports = tailwindConfig;
  