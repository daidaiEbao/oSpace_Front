"use client"

import { Button, Col, Divider, Row } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from 'remark-gfm'

/**
 * 
 * @param {Object} props 
 * @param {string} props.id 当前博客对应的id e.g. 10001
 * @returns 
 */
const Detail : React.FC = (props) => {
    const [basicInfo, setBasicInfo] = useState();
    const [contentInfo, setContentInfo] = useState("");
    const [total, setTotal] = useState(0); // 文章总数

    useEffect(() => {
        setBasicInfo({
            title: 'Racing car sprays burning fuel into crowd.',
            time: '2024/3/23 18:41:46',
        });

        setContentInfo(`# 影响力
## 影响力的武器
一种机械化的过程：  
我们在要别⼈帮忙的时候，要是能给⼀个理由，成功的概率会更⼤。  
这个理由通常由“因为”点明，但其实这可能并不是什么有意义的原因。  

“贵=好”这种思维范式是在潜移默化和消耗精力后更坚定的思考模式。  
利用别人的思考模式，可以触发固定的机械化过程。

激发出环境中业已存在的强⼤影响⼒，并将它指向特定的⽬标。


对比原理：  
要是第⼆样东⻄跟第⼀样东⻄有着相当的不同，那么，我们往往会认为两者的区别⽐实际上更⼤。

先摆出对对方不利的物或事实（这些可能都是伪造的），然后摆出对对方有利的物或事实。  
如果是需要对方接受差的事物，则需要先提出更差的事物以铺垫。


## 互惠

给予，索取，再索取。

寄送免费样品就是一种互惠性质的推销策略。  
哪怕⼀件礼物讨厌到让⼈⼀有机会就扔掉的地步，但仍然管⽤，仍然可以拿来利⽤。（但这是一次性策略）

互惠原理可以触发**不对等**交换。

互惠原理可以让步处理，类似于对比原理，它迫使了接受对方让步的人以同种方式回应。  
称之为“拒绝——后撤”，后撤时的目的才是真正的目的，但为拒绝而提出的请求如果不切实际会被认为是缺乏诚意。

导致这种现象出现有这两种原因：
- 责任感  
所谓让步本来是发起人计划中的行为，但因为受试者的一再否定才出现让步，会让受试者认为让步是他们否定导致的结果，激发了其对于结果的责任感。
- 满意感  
同理，受试者会以为是自己的努力争取到了最终结果，因此感到满意。

大方接受或识别恶意。

公正的意思，就是盘剥的⾏为，要还以盘剥。

## 承诺和一致

⼈⼈都有⼀种⾔⾏⼀致（同时也显得⾔⾏⼀致）的愿望。  

⼀旦我们作出了⼀个选择，或采取了某种⽴场，我们⽴刻就会碰到来⾃内⼼和外部的**压⼒**，迫使我们按照承诺说的那样去做。在这样的压⼒之下，我们会想⽅设法地以⾏动证明⾃⼰先前的决定是正确的。

⼀旦保持⼀致的磁带播放起来，我们就可以开开⼼⼼地去做事，不⽤想得太多了。

从这句话可以看到，要想破除生活的迷茫，需要做出改变的决定然后言行一致，这种一致性磁带的过程会阻止多余的无用思考。

另一个好处是避免误入“歧途”。因为它可以让人避免思考。

一个小请求，可以让别人改变对自己的看法，从而适应一个大请求或其他请求。

> 在接受琐碎请求时务必⼩⼼谨慎，因为⼀旦同意了，它就有可能影响我们的⾃我认知。它不光能提⾼我们对分量更⼤的类似请求的顺从度，还能使我们更乐意去做⼀些跟先前答应的⼩要求毫不相关的事情。

称之为“登门槛”。这个门槛需要被包含在受试者的可接受范围内，或是可以被其努力后选择的。

如果情况允许，书面承诺，将是一个最有效的承诺。

> ⼀⽅⾯，是⼈们内⼼⾥有压⼒要把⾃我形象调整得与⾏为⼀致；另⼀⽅⾯，外部还存在⼀种更为⿁祟的压⼒，⼈们会按照他⼈对⾃⼰的感知来调整形象。

**公开承诺往往具有持久的效⼒。**

做出努力后的承诺，将更具有效力。

只有当我们认为外界不存在强⼤的压⼒时，我们才会为⾃⼰的⾏为发⾃内⼼地负起责任。

先给⼈⼀个甜头，诱使⼈作出有利的购买决定。承诺会搞定受试者。

⼀个办法来对付那些想要利⽤⼀致性原理坑我的⼈——只需要⼀语道破他们在⼲嘛就⾏了。

## 社会认同


在判断何为正确时，我们会根据别⼈的意⻅⾏事。

看到别⼈正在做，就觉得⼀种⾏为是恰当的，这种倾向通常都运作得挺不错。

既然事实证据⽆法更改，那就只有改变社会证据了。你能说服别⼈，⾃⼰也必然信服。

既然没⼈在乎，那就应该没什么问题。

## 喜好
        
        
`);
    setTotal(6);
    }, []);

    const idInt = parseInt(props.id);

    return (
        <div style={{marginLeft: '33%', marginRight: '33%', textAlign: 'left'}}>
            <h1>
            {basicInfo?.title}
        </h1>
        <p>
            {basicInfo?.time}
        </p>
        <Divider/>
        
        <div>
        <Markdown remarkPlugins={[remarkGfm]}>{"contentInfo"}</Markdown>
        </div>
        <div style={{marginTop: 80}}>
            <Row justify={'space-between'}>
                <Col>
                <Link href={idInt > 10001 ? `/blog/${(idInt-1).toString()}` : "/blog"} style={{fontSize: 18}}>
                    {"<- "}{idInt > 10001 ? "last blog" : "back to list"}
                </Link>
                </Col>

                <Col>
                <Link href={idInt < 10000 + total ? `/blog/${(idInt+1).toString()}` : "/blog"} style={{fontSize: 18}}>
                {idInt < 10000 + total ? "next blog" : "back to list"}{" ->"}
                </Link>
                </Col>
            </Row>
            
            
        </div>
        </div>
    );
}

export default Detail;