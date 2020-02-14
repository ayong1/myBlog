<template>
    <div class="container">
        <h4><span>我想说：</span></h4>
        <div class="author-speak">
            俗语说的好：流水不腐，户枢不蠹。意思是水要不停地流动，才能保持清澈不会发臭；门轴需要经常转动，才不会被虫蛀。人生也是如此。始终保持学习奋斗的状态，才能一直积极向上，时刻解锁新技能，不断成长。一旦停下来，就会慢慢耗光自己的积累，也很难找回最初的状态。就像一潭死水，永远看不到新面貌。这世上从来就没有哪一项成就是可以供人享受一辈子的。如果想一路荣耀，就要能舍得放下过去的成就，重新设定新的目标，不断发起新的挑战。不要让你一时的风光，成为你此生唯一的谈资。人生路很长，未来还有更多的辉煌等着你创造，千万别小看了自己。
        </div>
        <div class="author-speak">
            生活不是总是想着去超越谁，而是去超越自己。每个成功者，都要穿越不为人知的黑暗。强者不是没眼泪，只是能含着眼泪向前奔跑。
        </div>
        <div class="authorMessage">
            <img src="/static/authorMessage.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'authormessage',
    data() {
    return {

    };
  }
}
</script>

<style scoped>
    h4 span{
        font-weight: bold;
    }
    .container{
        position: relative;
        padding: 10px 20px;
        width: 100%;
        background: lightblue;
        border-radius:12px;
    }
    .author-speak{
        font-size: 18px;
        text-indent: 2em;
        line-height: 2em;
    }
    .authorMessage{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 3em;
    }
    .authorMessage img{
        border-radius:50%;
    }
</style>