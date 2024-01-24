// 计算电阻
window.calculateResistance = function (resistivity, length, crossSectionArea) {
  // 检查输入是否为数字
  if (typeof resistivity !== 'number' || typeof length !== 'number' || typeof crossSectionArea !== 'number') {
    throw new Error('所有输入参数必须是数字');
  }

  // 检查输入是否为正数
  if (resistivity <= 0 || length <= 0 || crossSectionArea <= 0) {
    throw new Error('所有输入参数必须是正数');
  }

  // 计算电阻值
  const resistance = (resistivity * length) / crossSectionArea;

  // 返回计算结果
  return resistance;
}

// 加载材料电阻率
window.loadMaterialResistivity = function () {
  const materialSelect = document.getElementById('material-select');

  fetch('material_resistivity.json')
  .then(response => response.json())
  .then(data => {
    for (const material of data.material) {
      const option = document.createElement('option');
      option.value = material.resistivity;
      option.textContent = material.name;
      materialSelect.appendChild(option);
    }
  })
  .catch(error => {
    console.error('Failed to load material resistivity:', error);
  });
}