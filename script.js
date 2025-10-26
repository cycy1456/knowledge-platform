// 滚动时导航栏样式变化 - 简化版
const scrollNav = () => {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'var(--white)';
            navbar.style.backdropFilter = 'none';
        }
    });
};

// 分类卡片动画和点击事件
const categoryAnimations = () => {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        // 悬停动画
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
        
        // 点击事件 - 保持点击功能但移除alert提示
        // 注意：卡片的滚动功能由onclick属性和smoothScroll函数处理
        // 这里不添加额外的alert提示
    });
};

// 图片加载动画
const imageLoadingAnimation = () => {
    const images = document.querySelectorAll('img');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
                observer.unobserve(img);
            }
        });
    }, { threshold: 0.1 });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(img);
    });
};

// 平滑滚动函数
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // 减去导航栏高度，避免被导航栏遮挡
            behavior: 'smooth'
        });
    }
}

// 图片画廊展开/折叠功能
// 图片画廊功能 - 实现互斥展开
function initImageGallery() {
    // 获取两个画廊的元素
    const galleryPreviewLeft = document.getElementById('galleryPreviewLeft');
    const galleryFullLeft = document.getElementById('galleryFullLeft');
    const galleryPreviewRight = document.getElementById('galleryPreviewRight');
    const galleryFullRight = document.getElementById('galleryFullRight');
    
    // 确保所有元素都存在
    if (galleryPreviewLeft && galleryFullLeft && galleryPreviewRight && galleryFullRight) {
        // 左侧画廊点击事件
        galleryPreviewLeft.addEventListener('click', function(e) {
            e.preventDefault();
            // 展开左侧画廊
            galleryFullLeft.classList.toggle('expanded');
            // 关闭右侧画廊（如果展开）
            galleryFullRight.classList.remove('expanded');
        });
        
        // 右侧画廊点击事件
        galleryPreviewRight.addEventListener('click', function(e) {
            e.preventDefault();
            // 展开右侧画廊
            galleryFullRight.classList.toggle('expanded');
            // 关闭左侧画廊（如果展开）
            galleryFullLeft.classList.remove('expanded');
        });
    }
}



// 返回顶部按钮 - 创意设计
const backToTopButton = () => {
    const button = document.createElement('button');
    button.className = 'back-to-top';
    button.innerHTML = '&#8249;'; // 向上的小于号
    document.body.appendChild(button);
    
    const style = document.createElement('style');
    style.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 60px; /* 不是最右下角 */
            right: 0; /* 贴着右边缘 */
            width: 60px;
            height: 70px;
            background-color: var(--primary-color);
            color: var(--white);
            border: none;
            /* 创意形状 - 圆角矩形但右侧无边框 */
            border-radius: 15px 0 0 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition);
            opacity: 0;
            visibility: hidden;
            z-index: 999;
            font-size: 2.5rem;
            font-weight: bold;
            box-shadow: -5px 5px 15px rgba(0, 0, 0, 0.2);
            transform-origin: center;
        }
        
        /* 创意动画效果 */
        .back-to-top::before {
            content: '';
            position: absolute;
            top: -15px;
            right: 0;
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-bottom: 15px solid var(--primary-color);
        }
        
        .back-to-top::after {
            content: '';
            position: absolute;
            bottom: -15px;
            right: 0;
            width: 0;
            height: 0;
            border-left: 15px solid transparent;
            border-top: 15px solid var(--primary-color);
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            background-color: var(--secondary-color);
            transform: translateX(-10px) rotate(5deg);
            animation: pulse 1.5s infinite;
        }
        
        .back-to-top:hover::before {
            border-bottom-color: var(--secondary-color);
        }
        
        .back-to-top:hover::after {
            border-top-color: var(--secondary-color);
        }
        
        @keyframes pulse {
            0% { transform: translateX(-5px) rotate(0deg); }
            50% { transform: translateX(-10px) rotate(5deg); }
            100% { transform: translateX(-5px) rotate(0deg); }
        }
        
        @media (max-width: 768px) {
            .back-to-top {
                bottom: 40px;
                width: 50px;
                height: 60px;
                font-size: 2rem;
            }
            
            .back-to-top::before,
            .back-to-top::after {
                border-left-width: 12px;
                border-bottom-width: 12px;
                border-top-width: 12px;
            }
        }
    `;
    document.head.appendChild(style);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // 滚动较少距离就显示
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // 点击动画
        button.style.transform = 'translateX(-20px) rotate(10deg) scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'translateX(0) rotate(0) scale(1)';
        }, 300);
    });
};

// 页面加载动画
const pageLoadAnimation = () => {
    // 添加页面加载样式
    const style = document.createElement('style');
    style.textContent = `
        .fade-in {
            animation: fadeIn 0.8s ease-in;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
    
    // 添加淡入动画
    document.body.classList.add('fade-in');
    
    // 滚动时显示各个部分
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
};

// 平滑滚动到分类部分
const smoothScrollToCategories = () => {
    const exploreBtn = document.getElementById('explore-btn');
    const categoriesSection = document.getElementById('categories');
    
    if (exploreBtn && categoriesSection) {
        exploreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 获取分类部分的位置
            const categoriesPosition = categoriesSection.getBoundingClientRect().top + window.scrollY;
            
            // 添加渐变式平滑滚动
            window.scrollTo({
                top: categoriesPosition,
                behavior: 'smooth'
            });
        });
    }
};

// 初始化所有功能
const init = () => {
    scrollNav();
    categoryAnimations();
    imageLoadingAnimation();
    backToTopButton();
    pageLoadAnimation();
    smoothScrollToCategories();
    initImageGallery();
};

// 页面加载完成后初始化
window.addEventListener('DOMContentLoaded', init);

// 显示图片模态框函数
function showImageModal(type) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    // 设置不同类型的图片
    if (type === 'wechat') {
        modalImage.src = 'images/wechat_qr.jpg';
        modalImage.alt = '微信二维码';
    } else if (type === 'qq') {
        modalImage.src = 'images/qq_qr.jpg';
        modalImage.alt = 'QQ二维码';
    }
    
    // 显示模态框
    modal.style.display = 'flex';
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
}

// 关闭图片模态框函数
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    // 恢复背景滚动
    document.body.style.overflow = 'auto';
}

// 点击模态框外部关闭模态框
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        closeModal();
    }
});

// 按ESC键关闭模态框
window.addEventListener('keydown', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});